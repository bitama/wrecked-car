import{ Component}from 'react';
class Car extends Component {
    constructor(props){
        super(props);
        this.statuses =["ready to get wrecked","a little beat up","still hanging there","felling kinda bad","totally wrecked"]
    this.state={
            status:0
    }
}
    render() {
    const style={width:"18rem",
        height:"300px",
        margin:"20px",
        backgroundColor:this.props.color,
    }
    const  onClickHandler=()=>{
        if(this.state.status < this.statuses.length-1){

            this.setState({status:this.state.status+1})
        }
            
    }

        return(
            <div class="card" style={style}onClick={onClickHandler} >
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNX58JfZH8X-hcnILGDCMufX4PwFAvGCN8Gg&usqp=CAU..." class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h2>"<i>{this.props.carName}"</i></h2>
                    <h2>Status:{this.statuses[this.state.status]}</h2>
                </div>
            </div>
        )
    }
}
export default Car