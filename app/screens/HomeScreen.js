import { useEffect, useState } from 'react';
import { ScrollView, Alert, ActivityIndicator } from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import Screen from '../components/Screen'
import Categories from '../components/Categories'
import SearchBar from '../components/SearchBar'
import RestaurantItem from '../components/RestaurantItem'
import tailwind from 'tailwind-react-native-classnames';
import colors from '../configs/colors'
import { DataStore } from 'aws-amplify';
import { Shop } from '../../src/models';


const HomeScreen = () => {
    const [restaurantData, setRestaurantData] = useState([])
    const [city, setCity] = useState("Nairobi, Kenya")
    const [activeTab, setActiveTab] = useState("Delivery");
    const [loading, setLoading] = useState(false)


    useEffect(() => {

        DataStore.query(Shop).then(setRestaurantData);


    }, [city, activeTab]);


    return (
        <Screen style={tailwind`bg-white flex-1`}>
            <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
            <SearchBar setCity={setCity} city={city} />
            <ScrollView style={tailwind`flex-1`} showsVerticalScrollIndicator={false}>
                <Categories />
                {loading && <ActivityIndicator size="large" color={colors.primary} style={tailwind`mt-2 mb-6`} />}
                <RestaurantItem restaurantData={restaurantData} />
            </ScrollView>
        </Screen>
    );
}

export default HomeScreen;
