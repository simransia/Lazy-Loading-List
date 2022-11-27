import { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from './Loader';


function List() {
    const [items, setItems] = useState([]);
    const [page, setPage] = useState(1);

    const getAll = async () => {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9`);
        let result = await response.json();
        setItems(result);
    }

    const fetchMoreData = () => {
        setPage(page + 1)

        setTimeout(async () => {
            let response = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=9`);
            let result = await response.json();
            console.log(result)
            setItems(items.concat(result))
        }, 1000)
    };

    useEffect(() => {
        getAll();
    }, [])

    return (
        <div>
            <InfiniteScroll
                dataLength={items.length}
                next={fetchMoreData}
                hasMore={page <= 11}
                loader={<Loader />}
            >
                <div className="profile-container">
                    {
                        items.map((item, index) => (
                            <div key={index} className="profile-list">
                                <span className='profile-img'><img src='https://avatars.dicebear.com/api/micah/sim.svg' width={110} height={110} /></span>
                                <h3 className='profile-title'>{item.title.charAt(0).toUpperCase() + item.title.substring(1, 18)}</h3>
                                <p className='profile-desc'>{item.body.substring(0, 400) + '...'}</p>
                            </div>
                        ))

                    }
                </div>
            </InfiniteScroll>
        </div>
    )
}

export default List