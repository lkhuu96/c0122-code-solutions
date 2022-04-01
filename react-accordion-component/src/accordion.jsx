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
function createTopics() {
  const list = listItems.map(listItem => (
    <li key={listItem.subject}>{listItem.subject}</li>
  ));
  return list;
}
class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.createTopics = this.createTopics.bind(this);
  }

  render() {
    return (
      <ul>
        {createTopics()}
      </ul>
    );
  }
}

export default Accordion;
