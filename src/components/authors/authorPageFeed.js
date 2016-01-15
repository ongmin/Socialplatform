'use strict'

var React = require('react')
var Router = require('react-router')
var Link = require('react-router').Link
var AuthorStore = require('../../stores/authorStore')
var AuthorActions = require('../../actions/authorActions')
var AuthorList = require('./authorList')
var AuthorPanels = require('./authorPanels')

var AuthorPage = React.createClass({
  getInitialState: function () {
    return {
      authors: AuthorStore.getAllAuthors()
    }
  },

  componentWillMount: function () {
    AuthorStore.addChangeListener(this._onChange)
  },

  // Clean up when this component is unmounted
  componentWillUnmount: function () {
    AuthorStore.removeChangeListener(this._onChange)
  },

  _onChange: function () {
    this.setState({ authors: AuthorStore.getAllAuthors() })
  },

  render: function () {
    return (
      <div className='pageWrapper'>
        <h2>Here's whats up <Link to='addAuthor' className='btn btn-default alignright'>Add</Link></h2>
        <div className='contentSpacing'>
        <AuthorPanels authors={this.state.authors} />
        </div>
      </div>
    )
  }
})

module.exports = AuthorPage