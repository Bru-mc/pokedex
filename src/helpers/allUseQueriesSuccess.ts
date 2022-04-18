import { UseQueryResult } from "react-query";

export const allUseQueriesSuccess = (useQueries: UseQueryResult<any, unknown>[]) =>{
    const useQueriesLength = useQueries.length;
    let allQueriesSuccess = false;
    let sucessCount = 0;
    useQueries.forEach(useQuerie =>
        {
          if(useQuerie.isSuccess){
            sucessCount+=1
          }
        }
    );
    if(useQueries.length>=1 && sucessCount===useQueriesLength){
      allQueriesSuccess = true;
    }
    console.log(allQueriesSuccess);
    console.log("Success = ",sucessCount);
    return allQueriesSuccess;
}