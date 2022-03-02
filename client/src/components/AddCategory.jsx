import React from 'react';

function AddCategory() {
  return (
    <div className='addCategory'>
        <form className='addCategoryForm' method='POST' action='/categories'>
            <input type='text' name='category' placeholder='Digite a categoria'/>
            <button className='btn btn-primary btn-sm'>Adiconar categoria</button>
        </form>
    </div>
  )
}

export default AddCategory;
