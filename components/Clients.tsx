'use client';
import { PT_Mono } from 'next/font/google';

import { useMutation, useQuery } from '@apollo/client';
import { GET_CLIENTS } from '@/queries/clientQueries';
import { Add_CLIENT, DELETE_CLIENT } from '@/mutations/clientMutations';

const PT_Mono_ = PT_Mono({
    subsets: ['latin'],
    weight: ['400'],
});

const Clients = () => {
    const { loading, data, error } = useQuery(GET_CLIENTS);
    const [deleteClient] = useMutation(DELETE_CLIENT, {
        update(cache, { data: deleteClient }) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS });
            cache.writeQuery({
                query: GET_CLIENTS,

                data: {
                    clients: clients.filter(
                        (client) => client.id !== deleteClient.deleteClient.id
                    ),
                },
            });
        },
    });
    const [addClient] = useMutation(Add_CLIENT, {
        variables: { name: 'Henry', email: 'cbcs', phone: '893939' }, // useState
        update(cache, { data: addClient }) {
            const { clients } = cache.readQuery({ query: GET_CLIENTS });
            cache.writeQuery({
                query: GET_CLIENTS,
                data: { clients: [...clients, addClient] },
            });
        },
    });

    // if (loading) return <p>Loading...</p>; // Loading Spinner
    // if (error) return <p>Error : {error.message}</p>;

    return (
        <div className={`${PT_Mono_.className}`}>
            <div>Clients</div>
            <button
                onClick={() => {
                    console.log('ALLOW ME TO TRY AGAIN');
                }}
            >
                try again
            </button>
            {/* <button onClick={() => addClient({variables: { name: "Henry", email: "cbcs", phone: "893939"}})}>add client</button>
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
        </div> */}
            <p className="mt-2">Hello world</p>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(124,58,237,0.2)] text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
                quia veniam est doloremque corrupti laboriosam, iusto
                praesentium accusamus expedita omnis laudantium tempora at atque
                ullam nobis deleniti, aliquid nesciunt iure.
            </div>
        </div>
    );
};

export default Clients;
