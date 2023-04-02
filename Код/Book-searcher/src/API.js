const BASE_PATH = 'https://www.googleapis.com/books/v1/volumes';
const API_KEY = 'AIzaSyBvUn4tgH2vsuTaVNdv__BJUm7bfbQ5QNY';

//export const GetAPI = async (e) => {
export default async function GetAPI(e){
  e.preventDefault();

  const request = e.target.elements.request.value;
  const subject = e.target.elements.subject.value;
  const orderBy = e.target.elements.orderBy.value;
  const startIndex = 0;
  const maxResults = 30;

  const api_url = `${BASE_PATH}?q=${request}${subject && `+subject:${subject}`}&orderBy=${orderBy}&startIndex=${startIndex}&maxResults=${maxResults}&printType=books&key=${API_KEY}`;
  const api_result = await fetch(api_url);
  const data = await api_result.json();

  // for testing !!!
  console.log(api_url);
  console.log(data);
  console.log(
    '--------------------------------------\n' + 
    `totalItems ${data.totalItems}\n` +
    '--------------------------------------\n' + 
    data.items.map(({volumeInfo}) => 
      '\n' +
      `title: ${!!volumeInfo.title ? volumeInfo.title : '-'}\n` +
      `author: ${volumeInfo.authors ? volumeInfo.authors[0] : '-'}\n` +
      `category: ${volumeInfo.categories ? volumeInfo.categories[0] : '-'}\n` +
      `description: ${volumeInfo.description ? volumeInfo.description : '-'}\n` +
      `imageLink: ${volumeInfo.imageLinks.thumbnail ? volumeInfo.imageLinks.thumbnail : '-'}\n`
    )
  );
};