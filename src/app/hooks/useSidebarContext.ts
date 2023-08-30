import { useContext } from 'react';
import { SidebarContext } from '../contexts/SidebarContext';

export default function useSidebarContext() {
  return useContext(SidebarContext);
}