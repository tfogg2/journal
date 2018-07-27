import React, { Component } from 'react';
import Icon from 'react-icons-kit';
import { bold } from 'react-icons-kit/feather/bold';
import { italic } from 'react-icons-kit/feather/italic';
import { list } from 'react-icons-kit/feather/list';
import { underline } from 'react-icons-kit/feather/underline';
import { code } from 'react-icons-kit/feather/code';


class FormatToolbar extends Component{
  render(){
    return(
      <div className="formatToolbar">
        <button
          className="tooltip-icon-button"
          onPointerDown={(e) => this.props.onMarkClick(e, 'bold')}>
          <Icon icon={bold} />
        </button>
        <button className="tooltip-icon-button"
          onPointerDown={(e) => this.props.onMarkClick(e, 'italic')}>
          <Icon icon={italic} />
        </button>
        <button className="tooltip-icon-button"
          onPointerDown={(e) => this.props.onMarkClick(e, 'underline')}>
          <Icon icon={underline} />
        </button>
        <button className="tooltip-icon-button"
          onPointerDown={(e) => this.props.onMarkClick(e, 'list')}>
          <Icon icon={list} />
        </button>
        <button className="tooltip-icon-button"
          onPointerDown={(e) => this.props.onMarkClick(e, 'code')}>
          <Icon icon={code} />
        </button>
      </div>
    )
  }
}

export default FormatToolbar;
