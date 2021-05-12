import{ Component} from 'react';

class Wrecked extends Component{
    render(){
        return (
            <div id="Wrecked" className="d-flex justify-content-around flex-wrap">
            {this.props.children}
            </div>
        )
    }
}
export default Wrecked