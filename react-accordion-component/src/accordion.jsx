import React from 'react';

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

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };

    this.createTopics = this.createTopics.bind(this);
  }

  createTopics() {
    const list = listItems.map(listItem => (
      <li key={listItem.subject}>
        <div className='header'>{listItem.subject}</div>
        <div>{listItem.content}</div>
      </li>
    ));
    return list;
  }

  render() {
    return (
      <ul>
        {this.createTopics()}
      </ul>
    );
  }
}

export default Accordion;
