import { gql, useQuery } from "@apollo/client";
import { LinearProgress } from "@mui/material";
import { DataGrid, GridColDef, GridOverlay, GridRowsProp, } from '@mui/x-data-grid';
import moment from "moment";

const GH_COMPONENT_QUERY = gql`
query GHComponentQuery($searchValue: String!) {
  search(query: $searchValue, type: USER, first: 100) {
    edges {
      node {
        ... on User {
          id
          email
          avatarUrl
          login
          name
          repositories(first: 100) {
            totalCount
          }
          createdAt
          updatedAt
        }
      }
    }
  }
}
`;

interface QueryVariables {
  searchValue: string;
}

export interface ISearchString {
  searchString: string | undefined;
}
  
export default function ShowResults(props:ISearchString){
  const {searchString = ''} = props;

  const { loading, error, data } = useQuery<any, QueryVariables>(GH_COMPONENT_QUERY, {
    variables: { searchValue: searchString },
    skip: searchString === undefined || searchString === '',
  });

  if (!searchString) return <div />;
  if (error !== undefined) return <div>No results found using: {searchString}</div>
  if (loading || data === undefined) return <div>Loading...</div>;
  
  const records = data.search.edges; 
  const columns: GridColDef[] = [
    { field: 'login', headerName: 'User Name', width: 150 },
    { field: 'avatarUrl', headerName: 'Avatar', width: 150 },
    { field: 'location', headerName: 'Location', width: 150 },
    { field: 'name', headerName: 'Real Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 250 },
    { field: 'totalCount', headerName: 'Count', width: 150 },
    { field: 'createdAt', headerName: 'Created', width: 250},
    { field: 'updatedAt', headerName: 'Updated', width: 250},
  ];
  const getFlatItems = (data: any[]): GridRowsProp => {
    if(data.length === 0){
      return [];
    }
    return data.map((row:any, idx:number) => {
      const flatRow = {
        id: `row${idx}`,
        login: row.node.login,
        avatarUrl: row.node.avatarUrl,
        location: row.node.location,
        name: row.node.name,
        email: row.node.email,
        totalCount: row.node.totalCount,
        createdAt: moment(row.node.createdAt).format("MM-DD-YYYY, h:mm:ss a Z"),
        updatedAt: moment(row.node.updatedAt).format("MM-DD-YYYY, h:mm:ss a Z"),

      }
      return flatRow;
    })
  };

  const flatItems: GridRowsProp = getFlatItems(records);

  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
       rows={flatItems}
        columns={columns}
        components={{
          LoadingOverlay: CustomLoadingOverlay,
        }}
      />
    </div>
  );
}
function CustomLoadingOverlay() {
  return (
    <GridOverlay>
      <div style={{ position: 'absolute', top: 0, width: '100%' }}>
        <LinearProgress />
      </div>
    </GridOverlay>
  );
}
