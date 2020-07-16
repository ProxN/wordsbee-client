import { createTypedHooks } from 'easy-peasy';
import IStore from '../store/store.interface';

const typedHooks = createTypedHooks<IStore>();

const { useStoreState, useStoreActions, useStoreDispatch } = typedHooks;

export { useStoreDispatch, useStoreActions, useStoreState };
