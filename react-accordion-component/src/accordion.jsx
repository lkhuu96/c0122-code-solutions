import React, { useState } from 'react';

const listItems = [
  {
    subject: 'HTML',
    content: 'I am Hypertext Markup Language'
  },
  {
    subject: 'CSS',
    content: 'I am Cascading Style Seets'
  },
  {
    subject: 'JS',
    content: 'I am JavaScript'
  }
];

function Accordion() {
  const [open, setOpen] = useState();

  const createList = () => {
    const list = listItems.map((listItem, indexNum) => {
      let hide = 'hidden';
      if (open === indexNum) {
        hide = '';
      }
      return (
        <li key={indexNum}>
          <div onClick={() => changeView(indexNum)} className='header'>{listItem.subject}</div>
          <div className={hide}>{listItem.content}</div>
        </li>
      );
    });
    return list;
  };

  const changeView = indexNum => {
    if (open === indexNum) {
      setOpen(null);
    } else {
      setOpen(indexNum);
    }
  };

  return (
    <ul>{createList()}</ul>
  );
}
// class Accordion extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: null
//     };
//     this.changeView = this.changeView.bind(this);
//     this.createList = this.createList.bind(this);
//   }

//   createList() {
//     const list = listItems.map((listItem, indexNum) => {
//       let hide = 'hidden';
//       if (this.state.isOpen === indexNum) {
//         hide = '';
//       }
//       return (
//         <li key={indexNum}>
//           <div onClick={() => this.changeView(indexNum)} className='header'>{listItem.subject}</div>
//           <div className={hide}>{listItem.content}</div>
//         </li>
//       );
//     });
//     return list;
//   }

//   changeView(indexNum) {
//     if (this.state.isOpen === indexNum) {
//       this.setState({
//         isOpen: null
//       });
//     } else {
//       this.setState({
//         isOpen: indexNum
//       });
//     }
//   }

//   render() {
//     return (
//       <ul>{this.createList()}</ul>
//     );
//   }
// }

export default Accordion;
