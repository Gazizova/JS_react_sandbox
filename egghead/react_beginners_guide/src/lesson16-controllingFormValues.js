import React from 'react'


class Lesson16 extends React.Component {
    static availableOptions = [
        'apple',
        'grape',
        'cherry',
        'orange',
        'pear',
        'peach',
    ]

    state = {
        multiline: '',
        commaSeparated: '',
        multiSelect: [],
    }

    handleCommaSeparatedChange = event => {
        const {value} = event.target
        const allVals = value
            .split(',')
            .map(v => v.trim())
            .filter(Boolean)
        this.setState({
            commaSeparated: value,
            multiline: allVals.join('\n'),
            multiSelect: allVals.filter(v =>
                Lesson16.availableOptions.includes(v),
            ),
        })
    }

    handleMultilineChange = event => {
        const {value} = event.target
        const allVals = value
            .split('\n')
            .map(v => v.trim())
            .filter(Boolean)
        this.setState({
            multiline: value,
            commaSeparated: allVals.join(','),
            multiSelect: allVals.filter(v =>
                Lesson16.availableOptions.includes(v),
            ),
        })
    }

    handleMultiSelectChange = event => {
        const allVals = Array.from(
            event.target.selectedOptions,
        ).map(o => o.value)
        this.setState({
            multiSelect: allVals,
            multiline: allVals.join('\n'),
            commaSeparated: allVals.join(','),
        })
    }

    render() {
        const {
            commaSeparated,
            multiline,
            multiSelect,
        } = this.state

        return (
            <form>
                 <h3> Lesson 16:</h3>
                <div>
                    <label>
                        comma separated values:
                        <br />
                        <input
                            type="text"
                            value={commaSeparated}
                            onChange={
                                this.handleCommaSeparatedChange
                            }
                        />
                    </label>
                </div>
                <div>
                    <label>
                        multiline values:
                        <br />
                        <textarea
                            value={multiline}
                            rows={
                                Lesson16.availableOptions
                                    .length
                            }
                            onChange={
                                this.handleMultilineChange
                            }
                        />
                    </label>
                </div>

                <div>
                    <label>
                        multiSelect values:
                        <br />
                        <select
                            multiple
                            value={multiSelect}
                            size={
                                Lesson16.availableOptions
                                    .length
                            }
                            onChange={
                                this.handleMultiSelectChange
                            }
                        >
                            {Lesson16.availableOptions.map(
                                optionValue => (
                                    <option
                                        key={optionValue}
                                        value={optionValue}
                                    >
                                        {optionValue}
                                    </option>
                                ),
                            )}
                        </select>
                    </label>
                </div>
            </form>
        )
    }
}

export default Lesson16
