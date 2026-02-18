import React from 'react'
import SubgridComparison from './subgrid'
import { Alignment } from './alignment'
import { Container } from './container'
import { Clamp } from './clamp'
import { Responsive } from './responsive'
import { Sidebar } from './sidebar'
import { HolyGrailLayout } from './holygraid'
import { MasonryGrid } from './masonry'
import { StickyHeaderWithEffect } from './stickygeader'
import { StickySidebarLayout } from './steakeysidebar'
import { MultiLineTruncate, SingleLineTruncate } from './trancate'
import { PreventOverflow } from './preventOverflow'

export const Layout = () => {
    return (
        <div>

            {/* <!-- Auto-fit: columns expand to fill space --> */}
            {/* <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
                <div className='border'>Card 1</div>
                <div className='border'>Card 2</div>
                <div className='border'>Card 3</div>

            </div> */}

            {/* <!-- Auto-fill: maintains column width, leaves gaps --> */}
            {/* <div className="grid grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-4">
                <div className='border'>Card 1</div>
                <div className='border'>Card 2</div>
                <div className='border'>Card 3</div>
            </div> */}

            {/* <SubgridComparison/> */}
            {/* <Alignment/> */}
            {/* <Container/> */}
            {/* <Clamp/> */}
            {/* <Responsive/> */}
            {/* <Sidebar/> */}
            {/* <HolyGrailLayout/> */}
            {/* <MasonryGrid/> */}
            {/* <StickyHeaderWithEffect/> */}
            {/* <StickySidebarLayout/> */}
            {/* <SingleLineTruncate/>
                <MultiLineTruncate/> */}
            {/* <PreventOverflow/> */}


            {/* With subgrid, the child grid uses the parent's tracks: */}
            {/* <div className="grid grid-cols-3 gap-4 border"> */}
            {/* <!-- Each card uses parent's rows --> */}
            {/* <div className="grid grid-rows-subgrid border row-span-3">
                    <h3>Title</h3>
                    <p>Short desc</p>
                    <button>Click</button>
                </div>

                <div className="grid grid-rows-subgrid border row-span-3">
                    <h3>Title</h3>
                    <p className='h-20 border'>Very long description here
                    ddddddddddddddddddddddddddddddddddddddddddd</p>
                    <button>Click</button>
                </div>

                <div className="grid grid-rows-subgrid border row-span-3">
                    <h3>Title</h3>
                    <p className='border'>Medium description</p>
                    <button>Click</button>
                </div>
            </div> */}
        </div>
    )
}

