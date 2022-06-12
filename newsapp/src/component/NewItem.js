import React, { PureComponent } from 'react'


export class NewItem extends PureComponent {
  
  render() {
    let {title, description, imageUrl, newUrl, author, date} = this.props;
    return (
      <div>
        <div className="card" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{title}...</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} 
              on {new Date(date).toGMTString()}</small></p>
              <a href={newUrl} target="_blank" className="btn btn-sm btn-primary" 
               rel="noreferrer">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewItem

// style={{width: "18rem"}}