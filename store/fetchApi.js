const base_Url = "https://fakestoreapi.com/";
export async function getData(endpoint){
      try{
            const responeData = await fetch(`${base_Url}${endpoint}`);
            const data = await responeData.json();
            return data;
      }catch(error){
            console.error("error ",error);
      }
}
