import './style.scss';
import { useEffect, useState } from 'react';
import { FaSearch, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { ProductsData } from '../../assets/data/productData';

interface ProductsType {
    id:number;
    Image:string;
    name:string;
    price:number;
    offerPrice:number;
    type:string;
    productType:string;
}

export function Products() {
    const [products, setProducts] = useState<ProductsType[]>([]);
    const [search, setSearch] = useState("");
    const [itensPerPage, setItensPerPage] = useState(8);
    const [currentPage, setCurrentPage] = useState(0);
    const [animalType, setAnimalType] = useState("");
    const [productType, setProductType] = useState("");

    const pages = Math.ceil(products.length / itensPerPage);
    const startIndex = currentPage * itensPerPage;
    const endIndex = startIndex + itensPerPage;
    const currentItens = products.slice(startIndex, endIndex);

    const searchLowerCase = search.toLowerCase();
    function searchProducts() {
        if(search !== "") {
            setProducts(ProductsData.filter((e:any) => e.name.toLowerCase().includes(searchLowerCase)));
        } else {
            setProducts(ProductsData);
        }
    }

    function searchByAnimalType() {
        if(animalType !== "") {
            if(animalType === "Animal") {
                setProducts(ProductsData);
            } else {
                setProducts(ProductsData.filter((e:any) => e.type === animalType));
            }
        } else {
            setProducts(ProductsData);
        }
    }

    function searchByProductType() {
        if(productType !== "") {
            if(productType === "Tipo de produto") {
                setProducts(ProductsData);
            } else {
                setProducts(ProductsData.filter((e:any) => e.productType === productType));
            }
        } else {
            setProducts(ProductsData);
        }
    }

    function Clean() {
        setAnimalType("")
        setProductType("");
        setSearch("");
    }

    function handleNextPage() {
        setCurrentPage(currentPage + 1);
        if(currentPage === Array(pages).length - 1) {
            setCurrentPage(currentPage);
        }
    }

    function handlePreviousPage() {
        setCurrentPage(currentPage - 1);
        if(currentPage === 0){
            setCurrentPage(currentPage)
        }
    }


    useEffect(() => {
        searchProducts();
        // eslint-disable-next-line
    }, [search])

    useEffect(() => {
        setItensPerPage(itensPerPage);
        // eslint-disable-next-line
    }, [])

    useEffect(() => {
        searchByAnimalType();
        // eslint-disable-next-line
    }, [animalType])

    useEffect(() => {
        searchByProductType()
        // eslint-disable-next-line
    }, [productType])

    useEffect(() => {
        Clean()
        // eslint-disable-next-line
    }, [])


    return (
        <div className = "products container" id='produtos'>
            <h2 className='fw-bold'>
                Confira os melhores <br />
                produtos para seus pets
            </h2>

            <div className='filter-box d-flex gap-3 mt-5'>
                <div className='search-box d-flex align-items-center'>
                    <input 
                        type="text" 
                        placeholder='Pesquisar'
                        value={search}
                        onChange={(e:any) => setSearch(e.target.value)} 
                    />
                    <FaSearch className='icon'/>
                </div>
                <div className='select-box'>
                    <select
                        onChange={(e:any) => setAnimalType(e.target.value)}
                        value={animalType}
                    >
                        <option value="Animal">Animal</option>
                        <option value="Cachorro">Cachorro</option>
                        <option value="Gato">Gato</option>
                        <option value="Passaro">Passaro</option>
                        <option value="Peixe">Peixe</option>
                    </select>
                </div>
                <div className='select-box'>
                    <select
                        onChange={(e:any) => setProductType(e.target.value)}
                        value={productType}
                    >
                        <option value="Tipo de produto">Tipo de produto</option>
                        <option value="Ração">Ração</option>
                        <option value="Casa e cama">Casa e cama</option>
                        <option value="Brinquedo">Brinquedo</option>
                        <option value="Roupa">Roupa</option>
                    </select>
                </div>
                <button className='fw-bold text-light' onClick={() => Clean()}>Limpar</button>
            </div>

            <div className="mt-5 m-auto">
                {products.length === 0 ? <p className='text-center fw-bold'>
                                            Não há produtos que correspodam <br /> a sua pesquisa 😿
                                         </p>
                
                    :
                    <div className='product-container row gap-4 m-auto'>
                        {currentItens.map(product => {
                    return (
                                <div key={product.id} className="product-box mb-2 col-md-3 d-flex flex-column gap-2">
                                    <div className='img-container d-flex justify-content-center align-items-center'>
                                        <img src={product.Image} alt="product" />
                                    </div>
                                    <p className='mb-0'>{product.name}</p>
                                    <h5 className='fw-bold h5'>
                                        {Intl.NumberFormat('pt-br', {
                                            style:'currency',
                                            currency: "BRL",
                                        }).format(product.price)}
                                    </h5>
                                    <div className='promotion d-flex align-items-center gap-2'>
                                        <div className='offer text-light d-flex justify-content-center align-items-center'>
                                            <h6 className='fw-bold mb-0'>10% OFF</h6>
                                        </div>
                                        <span>
                                            {Intl.NumberFormat('pt-br', {
                                                style:'currency',
                                                currency: "BRL",
                                            }).format(product.offerPrice)}
                                        </span>
                                    </div>
                                    <span>Para assinantes</span>
                                </div>
                            )
                        })}
                    </div>
                }
            </div>
                <div className="pagination mt-5 d-flex gap-3 justify-content-center align-items-center">
                    <FaArrowLeft onClick={handlePreviousPage} className='icon' />
                    {Array.from(Array(pages), (item, index) => {
                        return <div key={index}>
                                    <button 
                                        value={index}
                                        onClick={() => setCurrentPage(index)}
                                    >
                                        {index + 1}
                                    </button>
                                </div>
                    })}
                    <FaArrowRight onClick={handleNextPage} className='icon' />
                </div>
        </div>
    )
}