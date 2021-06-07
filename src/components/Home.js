import React, { useState } from 'react';
import Select from 'react-select';
import '../App.css';

function Home() {
    const data = [
        {
            label: "Data 1",
            text: "Monday ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lectus ornare turpis aliquam, sed sodales ipsum congue. Duis semper enim mauris, id malesuada magna ultrices quis. Sed cursus volutpat ipsum, eu vehicula mi bibendum ac. Duis vulputate sapien sed augue fringilla, in venenatis orci ultricies. Quisque condimentum pharetra elit ut fringilla. Praesent mi turpis, aliquam et efficitur aliquam, lobortis non nibh. Suspendisse potenti. Ut sit amet erat eu nibh fringilla cursus eget vestibulum risus. Aenean sit amet velit aliquam, sagittis sapien eget, lacinia sapien. In ultricies ante pulvinar rutrum semper. Morbi ac elit pulvinar, commodo tellus non, lobortis dolor. Nunc metus neque, fringilla vitae commodo vitae, eleifend non purus. Ut mattis, elit ac accumsan ultricies, eros velit facilisis felis, non malesuada ante eros in nisi."

        },
        {
            label: "Data 2",
            text: "Tuesday ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lectus ornare turpis aliquam, sed sodales ipsum congue. Duis semper enim mauris, id malesuada magna ultrices quis. Sed cursus volutpat ipsum, eu vehicula mi bibendum ac. Duis vulputate sapien sed augue fringilla, in venenatis orci ultricies. Quisque condimentum pharetra elit ut fringilla. Praesent mi turpis, aliquam et efficitur aliquam, lobortis non nibh. Suspendisse potenti. Ut sit amet erat eu nibh fringilla cursus eget vestibulum risus. Aenean sit amet velit aliquam, sagittis sapien eget, lacinia sapien. In ultricies ante pulvinar rutrum semper. Morbi ac elit pulvinar, commodo tellus non, lobortis dolor. Nunc metus neque, fringilla vitae commodo vitae, eleifend non purus. Ut mattis, elit ac accumsan ultricies, eros velit facilisis felis, non malesuada ante eros in nisi."
        },
        {
            label: "Data 3",
            text: "Wednesday ipsum dolor sit amet, consectetur adipiscing elit. Proin sagittis lectus ornare turpis aliquam, sed sodales ipsum congue. Duis semper enim mauris, id malesuada magna ultrices quis. Sed cursus volutpat ipsum, eu vehicula mi bibendum ac. Duis vulputate sapien sed augue fringilla, in venenatis orci ultricies. Quisque condimentum pharetra elit ut fringilla. Praesent mi turpis, aliquam et efficitur aliquam, lobortis non nibh. Suspendisse potenti. Ut sit amet erat eu nibh fringilla cursus eget vestibulum risus. Aenean sit amet velit aliquam, sagittis sapien eget, lacinia sapien. In ultricies ante pulvinar rutrum semper. Morbi ac elit pulvinar, commodo tellus non, lobortis dolor. Nunc metus neque, fringilla vitae commodo vitae, eleifend non purus. Ut mattis, elit ac accumsan ultricies, eros velit facilisis felis, non malesuada ante eros in nisi."
        }
    ];

    // set value for default selection
    const [selectedValue, setSelectedValue] = useState("Please Select the option from above.");

    // handle onChange event of the dropdown
    const handleChange = e => {
        setSelectedValue(e.text);
    }

    return (
        <div className="App">
            <Select
                className="dropdown"
                value={data.find(obj => obj.text === selectedValue)} // set selected value
                options={data} // set list of the data
                onChange={handleChange} // assign onChange function
            />

            {selectedValue && <div style={{ marginTop: 80, lineHeight: '30px', marginLeft: 70, marginRight: 20 }}>
                <div>{selectedValue}</div>
            </div>}
        </div>
    );
}

export default Home;
