import React, {useState} from 'react';
import Input from '../../atoms/Input';
import styles from './Search.module.scss';
import Text from '../../atoms/Text/index';
import {BookInfo} from '../../../datatype/interface';


const baseUrl = 'http://openlibrary.org';

const Search = () => {
    const [result, setResult] = useState<Array<BookInfo>>([]);

    const searchBooks = async (query: string) => {
        const url = new URL(baseUrl + '/search.json');
        url.searchParams.append('title', query);
        const response = await fetch(String(url));
        return await response.json();
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        searchBooks(e.target.value).then(response => {
            setResult(response.docs);
            console.log(response.docs)
        });
    }

   
    const resultList = result.map((book,index) =>
    <div key={index} className={styles.title}>
      <Text type="paragraph" color="black">{book.title}</Text>
      <Text type="paragraph" color="black">{book.author_name && book.author_name.join(', ')}</Text>
      <Text type="paragraph" color="black">{book.first_publish_year}</Text>
    </div>
  );


  return (
    <div className={styles.Search}>
        <div className={styles.input}>
            <Input type="text" placeholder="Search" onChange={handleChange}></Input>
        </div>
        <div className={styles.heading}>
            <Text type="heading" color="black" size="40px">Search Results</Text>
        </div>
        {result.length > 0 && 
        <div>
         <div className={`${styles.title} ${styles.align}`}>
         <Text type="title" color="black">Title</Text>
         <Text type="title" color="black">Author</Text>
         <Text type="title" color="black">Pub Year</Text>
        
         </div>
         <div>
               {resultList}
         </div>
         </div>}
       
      
    </div>
  );
};

export default Search;