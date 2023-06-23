import { Meta, StoryFn } from '@storybook/react';
import theme from '../assets/scripts/tailwindTheme';

const meta: Meta = {
  title: 'Atoms/Color Pallet'
};

export default meta;

const style = { width: 240, height: 120 };

const Template: StoryFn = () => (
  <div className='flex-col'>
    <div>
      <p>white / black</p>
      <div className='flex'>
        <div style={style} className='bg-white border-2' />
        <div style={style} className='bg-black' />
      </div>
    </div>

    <div>
      <p>Neutral</p>
      <div className='flex flex-wrap'>
        {Object.keys((theme?.extend?.colors as any)?.neutral).map(
          (key, index) => (
            <div
              key={index}
              style={style}
              className={`bg-neutral-${key} border-2`}
            >
              <div className='bg-white text-black'>neutral-{key}</div>
            </div>
          )
        )}
      </div>
    </div>

    <div>
      <p>Secondary</p>
      <div className='flex flex-wrap'>
        {Object.keys((theme?.extend?.colors as any)?.secondary).map(
          (key, index) => (
            <div
              key={index}
              style={style}
              className={`bg-secondary-${key} border-2`}
            >
              <div className='bg-white text-black'>secondary-{key}</div>
            </div>
          )
        )}
      </div>
    </div>

    <div>
      <p>Skyblue</p>
      <div className='flex flex-wrap'>
        {Object.keys((theme?.extend?.colors as any)?.skyblue).map(
          (key, index) => (
            <div
              key={index}
              style={style}
              className={`bg-skyblue-${key} border-2`}
            >
              <div className='bg-white text-black'>skyblue-{key}</div>
            </div>
          )
        )}
      </div>
    </div>

    <div>
      <p>Critical</p>
      <div className='flex flex-wrap'>
        {Object.keys((theme?.extend?.colors as any)?.critical).map(
          (key, index) => (
            <div
              key={index}
              style={style}
              className={`bg-critical-${key} border-2`}
            >
              <div className='bg-white text-black'>critical-{key}</div>
            </div>
          )
        )}
      </div>
    </div>

    <div>
      <p>Warning</p>
      <div className='flex flex-wrap'>
        {Object.keys((theme?.extend?.colors as any)?.warning).map(
          (key, index) => (
            <div
              key={index}
              style={style}
              className={`bg-warning-${key} border-2`}
            >
              <div className='bg-white text-black'>warning-{key}</div>
            </div>
          )
        )}
      </div>
    </div>

    <div>
      <p>Success</p>
      <div className='flex flex-wrap'>
        {Object.keys((theme?.extend?.colors as any)?.success).map(
          (key, index) => (
            <div
              key={index}
              style={style}
              className={`bg-success-${key} border-2`}
            >
              <div className='bg-white text-black'>success-{key}</div>
            </div>
          )
        )}
      </div>
    </div>

    <div>
      <p>Info</p>
      <div className='flex flex-wrap'>
        {Object.keys((theme?.extend?.colors as any)?.info).map((key, index) => (
          <div key={index} style={style} className={`bg-info-${key} border-2`}>
            <div className='bg-white text-black'>info-{key}</div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const Default = Template.bind({});
