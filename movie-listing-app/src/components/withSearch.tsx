import React, { Component, ReactElement } from "react";
import movieObject from "../model/movie"; 



function withFilter (WrappedComponent: any, itemKey: string, activeChild: string)
{
    
    return class WrapperComponent extends Component<any, any> {
        state= {
            filterKey: '',
            filteredItems: (this.props.children[activeChild])
        };

    filter = (filterKey: string) => {

        console.log("Hello")
        console.log(this.props[this.props.activeChild])
        this.setState({
            filterKey,
            filteredItems: () => {
                console.log(this.props)
            }
            
            
            /* this.props.children.filter(
                (item: any) => {
                    console.log(item)

                    item[itemKey].toUpperCase().includes(filterKey.toUpperCase())} */
        })
    }

    render()
    {
        return <WrappedComponent
        {...this.state}
        {...this.props}
        filter={this.filter}
        />
    }
    }

}


export default withFilter;