import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
         title: 'Cochin',
          imageUrl: 'https://www.budgetwayfarers.com/wp-content/uploads/2018/06/cochin-food-guide.jpg',
          id: 1,
          linkUrl: ''
        },
        {
          title: 'Hyderabad',
          imageUrl: 'http://www.pritishaborthakur.com/wp-content/uploads/2015/12/BiryaniArt.jpg',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'Bangalore',
          imageUrl: 'https://media.weddingz.in/trade_partner_images/wecare_foods_beverages_memory_maker_caterers_bangalore_20732.jpg',
          id: 3,
          linkUrl: ''
        },
        /*{
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4,
          linkUrl: ''
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5,
          linkUrl: ''
        }*/
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
