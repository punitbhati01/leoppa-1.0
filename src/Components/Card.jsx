import React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import Dropdown from './Dropdown';
import Counter from './Counter';
import DeleteIcon from '@mui/icons-material/Delete';

function Card() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget); // Anchor the popover to the element that triggered the event
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="bg-white">
      {/* Card */}
      <div className="box-border h-128 w-64 p-4 border-4 shadow-xl rounded-xl px-4 py-4">
        {/* 1 */}
        <div className='rounded-md'>
          <div className="relative bg-gray-100 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md " 
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}>
            <img className="h-full w-full object-contain lg:h-full lg:w-full" src='./assets/peanut_butter.png' alt='product image'/>
            <div className="w-full absolute top-0 left-0 text-end m-0">
              ❤️  
            </div>
          </div>
        </div>
        {/* 2 */}
        <div>
          <Typography variant='h4'> Card Title</Typography>
        </div>
        {/* 3 */}
        <div className='flex justify-between'>
          <div>Flavor</div>
          <div>4.0 ⭐</div>
        </div>
      </div>
      
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'auto',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <div sx={{ p: 1 }}>
          {/* model */}
          <div className="bg-white rounded-xl px-4 py-4">
            <div className='flex'>
              <div className='h-128 w-64'>
                <img className="object-contain" src='./assets/peanut_butter.png' alt='product image'/>
              </div>
              <div>
                {/* product name */}
                <div className='flex justify-between'>
                  <Typography variant='h3'>Product Name</Typography>
                  {/* close button */}
                  <Button className='close' onClick={handlePopoverClose}>X</Button>
                </div>
                <br/>
                <hr/>
                <br/>
                {/* Description */}
                <div>
                  <p>The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog. <br/>
                  The quick brown fox jumps over the lazy dog. The quick brown fox jumps over the lazy dog.</p>
                </div>
                {/* quantity and weight */}
                <div className='flex p-3 space-x-3'> 
                  <div>
                    <Counter/>
                  </div>
                  <div>
                    <Dropdown className='h-2'/>
                  </div>
                </div>
                {/* price and Add to cart */}
                <div className='flex justify-between'>
                  <div>
                    <p><strike>200 Rs</strike></p>
                    <h3>150 Rs</h3>
                  </div>

                  <div>
                    <Button variant="outlined" startIcon={<DeleteIcon />}>
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Popover>
    </div>
  );
}

export default Card;
