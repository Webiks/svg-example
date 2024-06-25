import { useState } from 'react'
import './App.css'
import { HexColorPicker } from "react-colorful";
import Icon1 from './assets/28x28_with_1px_stroke.svg?react';
import Icon2 from './assets/28x28_with_1px_stroke_and_shadow.svg?react';

const sizes = [16, 28, 32, 48, 64, 96, 128, 192, 256]

function App() {
  const [color, setColor] = useState("#005577");

  const getIcon = (IconComponent, size, color) => {
    return (
      <div className='iconContainer'>
        <IconComponent fill={color} width={size} height={size} />
        {size}x{size}
      </div>
    )
  }

  return (
    <>
      <h1>SVG Example</h1>
      <HexColorPicker color={color} onChange={setColor} />
      <div className='container'>
        <div>
          No shadow:
          <div className='iconsContainer'>
            {sizes.map((size) => getIcon(Icon1, size, color))}
          </div>
        </div>
        <div>
          With shadow:
          <div className='iconsContainer'>
            {sizes.map((size) => getIcon(Icon2, size, color))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
