import React, { Component } from 'react';

export const AppContext = React.createContext();

export class AppProvider extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'dashboard',
            setPage: this.setPage
        }
    }
    setPage = page => this.setState({page});
    render() {
        const { children } = this.props;
        return (
            <AppContext.Provider value={this.state}>
                {children}
            </AppContext.Provider>
        )
    }
}