import './PetForm.css';

function PetForm() {
  return (
    <div className="pet-form">
      <p>Do you like cats or dogs?</p>
    
      <span>
        <input type="checkbox" id="pet1" name="pet" value="Cat" />
        <label htmlFor="pet1">Cats 😻</label>
        </span>
        <span>
        <br />
        <input type="checkbox" id="pet2" name="pet" value="Dog" />          
        <label htmlFor="pet2">Dogs 🐶</label>
      </span>
    </div>
  );
}

export default PetForm;
