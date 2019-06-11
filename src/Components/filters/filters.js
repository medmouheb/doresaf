import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import './filters.css'
import { connect } from 'react-redux'
import { addFilter } from '../../store/actions/actions'
let tab = [
    {
        Label: "order",
        Liste: ["from a to z", "from z to a", "hiegher", "lower", ]
    },
    {
        Label: "Couleur",
        Liste: ["Rose", "Bleu", "Blanc", "vert", "rouge", "violet"]
    },
    {
        Label: "size",
        Liste: ["extra small", "small", "normal", "large", "extra large"]
    },
]
class Filters extends Component {
    state = {
        filters: tab.map(el => { return { ...el, Liste: [] } })
    }
    render() {
        const addToFilter = (parentIndex, child) => {
            let testTable = this.state.filters
            testTable[parentIndex].Liste.push(child)
            this.setState({ filters: testTable })
        }
        return (
            <div className="filters">
                <Form>
                    {tab.map((element, index) => {
                        return (
                            <div>
                                <Button>
                                    {element.Label}
                                </Button>
                                {element.Liste.map(element0 => {
                                    return (
                                        <Form.Check onChange={(e) => { addToFilter(index, element0) }} type="checkbox" label={element0} />


                                    )
                                })}
                            </div>
                        )
                    })}
                </Form>
                <Button onClick={()=>{this.props.addFilter(this.state.filters)}}> push filter</Button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addFilter: (filters) => dispatch(addFilter(filters))
    }
}
export default connect(null, mapDispatchToProps)(Filters)