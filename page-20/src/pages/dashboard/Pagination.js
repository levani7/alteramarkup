import React from "react";


const Pagination = () => {
    return (
        <nav aria-label="Page navigation example">
                <ul class="inline-flex items-center -space-x-2">
                    <li>
                    <a href="#" class="block px-3 py-2 ml-0 ">
                        <span class="sr-only">Previous</span>
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    </li>
                    <li>
                    <a href="#" class="px-3 py-2 ">1</a>
                    </li>
                    <li>
                    <a href="#" class="px-3 py-2 ">2</a>
                    </li>
                    <li>
                    <a href="#" class="px-3 py-2 ">3</a>
                    </li>
                    <li>
                    <a href="#" class="px-3 py-2 ">4</a>
                    </li>
                    <li>
                    <a href="#" class="px-3 py-2 ">5</a>
                    </li>
                    
                    <li>
                    <a href="#" class="block px-3 py-2 ">
                        <span class="sr-only">Next</span>
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    </a>
                    </li>
                </ul>
            </nav>
    )
}

export default Pagination;