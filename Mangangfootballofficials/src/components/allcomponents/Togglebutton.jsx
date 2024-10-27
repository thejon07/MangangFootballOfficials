import React from 'react'
import './togglebutton.css'

function Togglebutton() {
  return (
    <div className='pt-2'>
      <div class=" justify-center flex flex-row items-center items-center ">
    <div class="flex flex-row justify-between toggle">
        <label for="dark-toggle" class="flex items-center cursor-pointer">
            <div class="relative">
            <input type="checkbox" name="dark-mode" id="dark-toggle" class="togglebutoninput checkbox hidden"/>
            <div class="block border-[1px] dark:border-white border-gray-900 w-10 h-6 rounded-full"></div>
            <div class="dot absolute left-1 top-1 dark:bg-white bg-gray-800 w-4 h-4 rounded-full transition"></div>
            </div>
            <div class="ml-3 dark:text-white text-gray-900 font-medium">
            Dark Mode
            </div>
        </label>
    </div>
</div>
    </div>
  )
}

export default Togglebutton


