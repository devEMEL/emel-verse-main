'use client'
import { useMutation, useQuery } from "@apollo/client";
import { GET_CLIENTS } from "@/queries/clientQueries";
import { Add_CLIENT, DELETE_CLIENT } from "@/mutations/clientMutations";




const Clients = () => {
    const { loading, data, error} = useQuery(GET_CLIENTS);
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        update(cache, { data: deleteClient}) {
            
            const { clients } = cache.readQuery({query: GET_CLIENTS});
            cache.writeQuery({
                query: GET_CLIENTS,
                
                data: { clients: clients.filter(client => client.id !== deleteClient.deleteClient.id)}

            })}
    });
    const [addClient] = useMutation(Add_CLIENT, {
        variables: { name: "Henry", email: "cbcs", phone: "893939"}, // useState
        update(cache, { data: addClient}) {
            const { clients } = cache.readQuery({query: GET_CLIENTS});
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: [...clients, addClient]}
            })
        }
    });

    if (loading) return <p>Loading...</p>; // Loading Spinner
    if (error) return <p>Error : {error.message}</p>;

  return (
    <div>
        <div>Clients</div>
        <button onClick={() => addClient({variables: { name: "Henry", email: "cbcs", phone: "893939"}})}>add client</button>
        <div>
            {
                !loading && !error && (
                    data.clients.map((client:any) => (
                        <div key={client.id}>
                        <p>{client.name}</p>
                        <p>{client.email}</p>
                        <p>{client.phone}</p>
                        <button onClick={() => {
                            deleteClient({variables: { id: client.id} })
                        }}>Delete Client</button>
                        </div> 
                    ))
                )
            }
        </div>
    </div>
  )
}

export default Clients;