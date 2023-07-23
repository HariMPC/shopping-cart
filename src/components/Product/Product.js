import './Product.css';
import Card from '../Cards/Cards';
const Plans = () =>{
    
const plans =[
    { 
        name:'Apple "I Phone"',
        Price:'$120.00 - $280.00',
        image: 'https://images.unsplash.com/photo-1557690267-fad2f168bb95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    },
    { 
        name:'One PLus 1+',
        Price:'$40.00 - $80.00',
        image: 'https://images.unsplash.com/photo-1557690267-fad2f168bb95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    },
    {
        name:'Samsung',
        Price:'$20.00 $18.00',
        image: 'https://images.unsplash.com/photo-1557690267-fad2f168bb95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    },
    {   
        name:'Redmi',
        Price:'$50.00 $25.00',
        image: 'https://images.unsplash.com/photo-1557690267-fad2f168bb95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    },
    { 
        name:'Realme',
        Price:'$40.00',
        image: 'https://images.unsplash.com/photo-1557690267-fad2f168bb95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    },
    {
        name:'Vivo',
        Price:'$50.00 $25.00',
        image: 'https://images.unsplash.com/photo-1557690267-fad2f168bb95?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
    }
];
    return (
        <div className="pln-container">
            <div className='pln-list'>
                {
                    plans.map((content, index) => 
                        <Card content = {content} key={index} />
                    ) 
                }
            </div>
        </div>
    )
}
export default Plans;