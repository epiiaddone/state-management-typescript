
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import { ContentRedux } from './ContentRedux';

   export function MainRedux() {
    const user = useSelector(
        (state: RootState) => state.user.user
        );

    return (
    <main className="py-8">
    <h1 className="text-3xl text-center font-bold 
    underline">Welcome</h1>
    <p className="mt-8 text-xl text-center">
    {user ? `Hello ${user.name}!` : "Please sign in"}
    </p>
    <ContentRedux />
    </main>
    );
   }