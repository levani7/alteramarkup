import React from "react";


const AddComentar = () => {
    const buttonStyle = 'p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600'
    
    const properties = {
        "aria-hidden":"true", class:"w-5 h-5", fill:"currentColor", viewBox:"0 0 20 20", xmlns:"http://www.w3.org/2000/svg"
    }

    const path = {
        "fill-rule":"evenodd", "clip-rule":"evenodd"
    }

    return (
        
        <form>
        <div class="xl:w-[954px] lg:w-[500px] h-[390px] mb-4 border border-white rounded-lg bg-white dark:bg-white dark:border-white">
                <div class=" py-2 bg-white rounded-b-lg dark:bg-white">
                    <label for="editor" class="sr-only">Publish post</label>
                    <textarea id="editor" rows="8" class="block w-full bg-[#FAFBFD] " placeholder="" required></textarea>
                </div>
            <div class="flex items-center justify-between px-3  border-b border-white">
                <div class="flex flex-wrap items-center divide-white sm:divide-x dark:divide-white">
                    <div class="flex items-center space-x-1 sm:pr-4">
                        <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                            <svg {...properties}><path {...path} d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z"></path></svg>
                            <span class="sr-only">Attach file</span>
                        </button>
                        <button type="button" class={buttonStyle}>
                            <svg {...properties}><path {...path} d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" ></path></svg>
                            <span class="sr-only">Embed map</span>
                        </button>
                        <button type="button" class={buttonStyle}>
                            <svg {...properties}><path {...path} d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" ></path></svg>
                            <span class="sr-only">Upload image</span>
                        </button>
                        <button type="button" class={buttonStyle}>
                            <svg {...properties}><path {...path} d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"></path></svg>
                                <span class="sr-only">Format code</span>
                        </button>
                        <button type="button" class={buttonStyle}>
                            <svg {...properties}><path {...path} d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zm-.464 5.535a1 1 0 10-1.415-1.414 3 3 0 01-4.242 0 1 1 0 00-1.415 1.414 5 5 0 007.072 0z"></path></svg>
                            <span class="sr-only">Add emoji</span>
                        </button>
                    </div>
                    <div class="flex flex-wrap items-center space-x-1 sm:pl-4">
                        <button type="button" class={buttonStyle}>
                            <svg {...properties}><path {...path} d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>
                            <span class="sr-only">Add list</span>
                        </button>
                        <button type="button" class={buttonStyle}>
                            <svg {...properties}><path {...path} d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" ></path></svg>       
                            <span class="sr-only">Settings</span>
                        </button>
                        <button type="button" class={buttonStyle}>
                            <svg {...properties}><path {...path} d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" ></path></svg>
                            <span class="sr-only">Timeline</span>
                        </button>
                        <button type="button" class={buttonStyle}>
                            <svg {...properties}><path {...path} d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"></path></svg>
                            <span class="sr-only">Download</span>
                        </button>
                    </div>
                </div>
                <button type="button" data-tooltip-target="tooltip-fullscreen" class={buttonStyle}>
                    <svg {...properties}><path {...path} d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 11-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" ></path></svg>
                    <span class="sr-only">Full screen</span>
                </button>
                <div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                    Show full screen
                    <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
            </div>
        </div>   
        </form>

    )
}

export default AddComentar;