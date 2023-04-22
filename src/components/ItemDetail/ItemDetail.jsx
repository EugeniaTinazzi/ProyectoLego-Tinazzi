import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({item}) => {

    const onAdd = (contador) => {
        console.log(contador)
        console.log(item)
    }
    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={item.img1} alt={`Imagen de ${item.name}`} className='img-fluid rounded-start'/>
            </div>
            <div className="card-body">
                <h5 className='card-title'>{item.name}</h5>
                <p className='card-text'>Precio: €{item.price}</p>
                <p className='card-text'>Limite: {item.limit}</p>
                <p className='card-text'>Stock: {item.stock}</p>
                <p className='card-text'>Edad: {item.ages}</p>
                <p className='card-text'>Piezas: {item.pieces}</p>
                <p className='card-text'>Artículo: {item.article}</p>
                <ItemCount ValInicial={1} minimo={1} maximo={item.limit} onAdd={onAdd} />
            </div>
        </div>
    );
}

export default ItemDetail;
