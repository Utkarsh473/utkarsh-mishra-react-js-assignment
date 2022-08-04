import React, {MouseEvent, Component, ReactElement, cloneElement, Children } from "react";
import "../index.css"
import withFilter from "./withSearch"


type State = {
    activeChild : number
    filterKey: string
}

type Props={
    children: ReactElement[]
}


class Navbar extends Component<any, State>{

    constructor(props: Props)
    {
        super(props);

    }
    
    state = {
        activeChild: 0,
        filterKey: ''
    };

    setActiveChild = async (num: number) => {
        await this.setState({
            activeChild: num
        })

        // console.log(this.state)

    }

    setFilterKey = async (key: string) =>
    {
        
        // console.log("filtr key is", this.state.filterKey)
        await this.setState({
            filterKey: key
        })
    }

    
    render(): React.ReactNode {
        
        console.log(this.state.filterKey)

        // const {activeChild, filterKey} = this.state
        
        // const {filterKey, filtereditems, filter} = this.props



        // console.log(activeChild, children)
        
        const el = (
        <>
        <div className = "Nav-parent">
        <button className="Nav-child-button" onClick={() => this.setActiveChild(0)}>Movies Coming</button>
        <button className="Nav-child-button" onClick={() => this.setActiveChild(1)}>Movies in Theaters</button>
        <button className="Nav-child-button" onClick={() => this.setActiveChild(2)}>Top rated India</button>
        <button className="Nav-child-button" onClick={() => this.setActiveChild(3)}>top-rated-movies</button>
        <button className="Nav-child-button" onClick={() => this.setActiveChild(4)}>Favorite</button>
        <input id="search-bar" type="text" placeholder="Search.." value={this.state.filterKey} onChange={(event) => this.setFilterKey(event.target.value)}/>
        </div>
        {React.cloneElement(this.props.children[this.state.activeChild], {filterKeyProp: this.state.filterKey})}
        </> 
        )

        

        return el;
        
    }

}

export default Navbar;