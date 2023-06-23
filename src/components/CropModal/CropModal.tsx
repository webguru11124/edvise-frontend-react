import {
  FC,
  useState,
  useRef,
  useCallback,
  SyntheticEvent,
  Fragment
} from 'react';

import ReactCrop, {
  centerCrop,
  Crop,
  makeAspectCrop,
  PixelCrop
} from 'react-image-crop';

import { Close } from '@mui/icons-material';
import { Dialog, Transition } from '@headlessui/react';
import { Button } from '../Button';

import 'react-image-crop/src/ReactCrop.scss';
import './CropModal.module.css';

interface CropModalProps {
  isOpen: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  imageSrc: string;
  saveImage: (base64: string) => void;
}

const getBase64 = (image: HTMLImageElement, crop: PixelCrop, scale = 1) => {
  const canvas: HTMLCanvasElement = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  const scaleX = image.naturalWidth / image.width;
  const scaleY = image.naturalHeight / image.height;

  const pixelRatio = window.devicePixelRatio;

  canvas.width = Math.floor(crop.width * scaleX * pixelRatio);
  canvas.height = Math.floor(crop.height * scaleY * pixelRatio);

  ctx.scale(pixelRatio, pixelRatio);
  ctx.imageSmoothingQuality = 'high';

  const cropX = crop.x * scaleX;
  const cropY = crop.y * scaleY;

  const centerX = image.naturalWidth / 2;
  const centerY = image.naturalHeight / 2;

  ctx.save();

  ctx.translate(-cropX, -cropY);
  ctx.translate(centerX, centerY);
  ctx.scale(scale, scale);
  ctx.translate(-centerX, -centerY);
  ctx.drawImage(
    image,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight,
    0,
    0,
    image.naturalWidth,
    image.naturalHeight
  );

  ctx.restore();
  return canvas.toDataURL('image/jpeg');
};

const CropModal: FC<CropModalProps> = ({
  isOpen,
  setOpen,
  imageSrc,
  saveImage
}) => {
  const [crop, setCrop] = useState<Crop>({
    unit: '%',
    width: 50,
    height: 50,
    x: 25,
    y: 25
  });

  const [scale, setScale] = useState(100);
  const imgRef = useRef<HTMLImageElement>(null);
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>({
    unit: 'px',
    x: 0,
    y: 0,
    width: 100,
    height: 100
  });

  const onChangeScale = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setScale(parseFloat(e.target.value));
    },
    [scale]
  );

  const onSaveImage = useCallback(() => {
    if (completedCrop?.width && completedCrop?.height && imgRef.current) {
      const base64 = getBase64(imgRef.current, completedCrop, scale / 100.0);
      saveImage(base64);
    }

    setOpen(false);
    setScale(100);
  }, [getBase64, imgRef, completedCrop, scale]);

  const onCancel = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onImageLoad = (e: SyntheticEvent<HTMLImageElement>) => {
    const { naturalWidth: width, naturalHeight: height } = e.currentTarget;
    const elemWidth = e.currentTarget.width;
    const elemHeight = e.currentTarget.height;

    // Centering image
    const center = centerCrop(
      makeAspectCrop(
        {
          unit: '%',
          width: 80
        },
        1,
        width,
        height
      ),
      width,
      height
    );

    setCompletedCrop({
      unit: 'px',
      x: (elemWidth * center.x) / 100.0,
      y: (elemHeight * center.y) / 100.0,
      width: (elemWidth * center.width) / 100.0,
      height: (elemHeight * center.height) / 100.0
    });

    setCrop(center);
  };

  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as='div' className='relative z-10' onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-30'
          leave='ease-in duration-200'
          leaveFrom='opacity-30'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-neutral-700 opacity-30 transition-opacity' />
        </Transition.Child>

        <div className='fixed inset-0 z-10 overflow-y-auto'>
          <div className='flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
              enterTo='opacity-100 translate-y-0 sm:scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 translate-y-0 sm:scale-100'
              leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            >
              <Dialog.Panel className='relative transform overflow-hidden rounded-lg bg-white px-14 pt-10 pb-9 text-left shadow-xl transition-all'>
                <div className='flex w-full'>
                  <Dialog.Title
                    as='h3'
                    className='text-2xl font-bold leading-6'
                  >
                    Crop Photo
                  </Dialog.Title>
                  <div className='ml-auto'>
                    <Close
                      className='text-neutral-600 w-3 h-3'
                      onClick={() => setOpen(false)}
                    />
                  </div>
                </div>

                <div className='w-[500px] mt-8'>
                  <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => {
                      setCrop(percentCrop);
                    }}
                    aspect={1}
                    className='rounded-md'
                    onComplete={(c) => {
                      setCompletedCrop(c);
                    }}
                  >
                    <img
                      ref={imgRef}
                      alt='Crop me'
                      src={imageSrc}
                      style={{
                        transform: `scale(${scale / 100.0})`
                      }}
                      onLoad={onImageLoad}
                    />
                  </ReactCrop>
                </div>

                <div className='mt-10 flex items-center'>
                  <input
                    type='range'
                    min={50}
                    max={200}
                    value={scale}
                    onChange={onChangeScale}
                    className='w-full h-2 bg-neutral-100 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                  />
                  <div className='flex ml-10'>
                    <div className='mr-1'>
                      <Button
                        shape='round'
                        text='Cancel'
                        width='fit-content'
                        color='secondary'
                        onClick={onCancel}
                      />
                    </div>
                    <div className='ml-1'>
                      <Button
                        shape='round'
                        text='Save'
                        width='fit-content'
                        onClick={onSaveImage}
                      />
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default CropModal;
