import React, {MouseEvent, Component, ReactElement, cloneElement, Children } from "react";
import "../index.css"


type State = {
    filterKey: string,
    activeButton: number
}



type Props={
    children: ReactElement[],
    activeChild : number,
    setActiveChild: Function
}


class Navbar extends Component<Props, State>{

    constructor(props: Props)
    {
        super(props);

        this.state = {
            filterKey: '',
            activeButton: this.props.activeChild
        };

    }


        // console.log(this.state)

    setFilterKey = async (key: string) =>
    {
        
        // console.log("filtr key is", this.state.filterKey)
        await this.setState({
            filterKey: key
        })
    }

    
    render(): React.ReactNode {
        
        console.log(this.state.filterKey)

        const {filterKey, activeButton} = this.state
        
        const {children, activeChild, setActiveChild} = this.props

        const changeState = (num: number) => {
            this.setState({
                activeButton: num
            })

            setActiveChild(num);

        }



        // console.log(activeChild, children)
        
        const el = (
        <>
        <div className = "Nav-parent">

            <button style={{backgroundColor: (activeButton==0) ? 'grey' : '', color: (activeButton==0) ?'white':''}} className="Nav-child-button" onClick={() => changeState(0)}>Movies Coming</button>

            <button style={{backgroundColor: (activeButton==1) ? 'grey' : '',color: (activeButton==1) ?'white':''}} className="Nav-child-button" onClick={() => changeState(1)}>Movies in Theaters</button>

            <button style={{backgroundColor: (activeButton==2) ? 'grey' : '',color: (activeButton==2) ?'white':''}} className="Nav-child-button" onClick={() => changeState(2)}>Top rated India</button>

            <button style={{backgroundColor: (activeButton==3) ? 'grey' : '',color: (activeButton==3) ?'white':''}} className="Nav-child-button" onClick={() => changeState(3)}>top-rated-movies</button>

            
            <button style={{backgroundColor: (activeButton==4) ? 'grey' : '',color: (activeButton==4) ?'white':''}} className="Nav-child-button" onClick={() => changeState(4)}>Favorite</button>
            
            <input id="search-bar" type="text" placeholder="Search.." value={this.state.filterKey} onChange={(event) => this.setFilterKey(event.target.value)}/>

        </div>
        {React.cloneElement(children[activeChild], {filterKeyProp: this.state.filterKey})}
        </> 
        )

        

        return el;
        
    }

}

export default Navbar;