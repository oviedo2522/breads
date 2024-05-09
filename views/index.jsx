const React = require('react')
const Default = require('./layouts/default.jsx')
const breads = require('../controllers/breads_controller.js')
const { title } = require('process')

function Index({ breads, title }) {
    return (
        <Default title={title}>
            <h2>Index Page</h2>
            <ul>
                <div className="newButton">
                    <a href="/breads/new"><button>Add a new bread</button></a>
                </div>
                {
                    breads.map((bread, index) => {
                        return (
                            <li key={index}>
                                <a href={`/breads/${index}`}>
                                    {bread.name}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </Default>

    )
}

module.exports = Index