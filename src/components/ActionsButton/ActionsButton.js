import React from 'react';
import './styles.css';
import { Button } from 'primereact/button';

const ActionsButton = ({ className, styles, setShowEntityFormDialog, addTransactionDialog }) => {

  return (
    <nav className={`fab-container p-d-flex  p-flex-column-reverse ${className}`} style={styles}>
      <Button
        icon="pi pi-plus"
        className="fab-action-item p-button-raised p-button-rounded p-button-warning p-mt-2 p-ml-auto p-mr-auto"
        style={{height:'4rem',width:'4rem',fontSize:'2rem'}}
      />
      <Button className="fab-item p-mt-2 bg-green-gradient text-white" label="Add Transaction" onClick={()=>addTransactionDialog()}/>
      {/* <Button className="fab-item p-mt-2" label="Add Multiple Transactions" /> */}
      <Button className="fab-item p-mt-2 bg-green-gradient text-white" label="Add Entity" onClick={()=>setShowEntityFormDialog(true)}/>
    </nav>
  );
};

export default ActionsButton;
