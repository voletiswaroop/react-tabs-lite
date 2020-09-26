import React from 'react'
import styles from './styles.module.css'

export default class EasyTabs extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: this.props.selected || 0
    }
  }

  handleChange(index) {
    this.setState({ selected: index })
  }

  render() {
    return (
      <div className={styles.easytabsWrapper}>
        <ul className={styles.easytabsHeading}>
          {this.props.children.map((item, index) => {
            let activeTab = index == this.state.selected ? `${styles.selectedItem}  ${styles.item}` : styles.item;
            return (
              <li className={activeTab} key={index} onClick={this.handleChange.bind(this, index)}>
                <i className={`${item.props.dataicon} ${styles.icon}`}></i> {item.props.title} </li>
            )
          })}
        </ul>
        <div className={styles.easytabsContent}>{this.props.children[this.state.selected]}</div>
      </div>
    )
  }
}