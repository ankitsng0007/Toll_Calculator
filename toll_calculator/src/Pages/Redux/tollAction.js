import axios, {} from 'axios';

export const calculateToll = (startLocation, endLocation) =>{
    async(dispatch) => {
        try{
            const response = await axios.get(`https://`);
            dispatch({
                type: 'CALCULATE_TOLL_SUCCESS',
                payload: response.data.trips[0].costs.tolls.toFixed(2),
            });
        }
        catch(error){
            dispatch({
                type: 'CALCULATE_TOLL_FAILURE',
                payload: error.message || 'Error in calculating Toll',
            });
        }
    };
}