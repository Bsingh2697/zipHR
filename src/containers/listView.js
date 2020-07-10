import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'
import { useSelector, useDispatch } from 'react-redux';
import { show_loader, hide_loader } from '../redux/action/action';
import { fetchPosts } from '../network';

const listView = () => {
    const load = useSelector(state => state.loader)
    const dispatch = useDispatch()
    const [posts, setPosts] = useState([])
    const [startEnd, setStartEnd] = useState({
        start : 0,
        end :10
    })
    const [bools, setBools] = useState({
        listLoading : false,
        bottomLoad : false,
        endReached : false,
        refreshing : false
    })

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = () => {
        setBools({...bools, bottomLoad : true}),
        dispatch(fetchPosts(startEnd.start,startEnd.end,response=>{
            console.log('Response Generated')
            console.log(response.data)
            var x=5
            if(x==5){
                console.log("yee")
            }
            else{
                console.log('Noooooooo')
            }
            if(Object.keys(posts).length == Object.keys(response.data).length)
            {   
                console.log('CHanging Bool')
                setBools({...bools, bottomLoad : false, endReached : true})
            }
            else {
                console.log('CHanging Bool')
                setPosts(response.data)
                setStartEnd(prevState =>({...prevState, end : prevState.end+10}))
                setBools({...bools, bottomLoad : false, refreshing : false})
            }
        })
        )
    }

    const pullToRefresh = () => {
        setBools({...bools,refreshing:true})
        fetchData()
    }

    const bottomPull = () => {
        bools.endReached ? null : fetchData()
    }

    return (
        <View style={{backgroundColor:'red',padding:40}}>
            <Text>
                LIST VIEW
            </Text>
            {
                load
                ?<ActivityIndicator animating size="large"/>
                :
                <FlatList
                data = {posts}
                renderItem={({item})=>(
                    <View style={{paddingVertical:10}}>
                        <Text>{item.title}</Text>
                    </View>
                )}
                extraData = {posts}
                // numColumns
                showsVerticalScrollIndicator={false}
                keyExtractor = {item => `${item.id}`}
                ItemSeparatorComponent={() => <View style={{height:2,backgroundColor:'black',marginVertical:5}}></View>}
                ListEmptyComponent = {()=><View><TouchableOpacity onPress={console.log("POSTS"),console.log(bools.bottomLoad)}>
                        <Text>Nothing Available</Text>
                    </TouchableOpacity></View>}

                ListFooterComponent = { bools.bottomLoad
                                        ?<ActivityIndicator animating size="large"/>
                                        :<View style={{paddingVertical:20,bottom:100}}>
                                            <Text style={{alignSelf:'center'}}>Fetch more of list</Text>
                                        </View>}
                ListHeaderComponent = {()=> <View>
                                        <Text style={{textAlign:'center'}}>Start Of List</Text>
                                    </View>}
                onEndReached = {bools.bottomLoad ? null : ()=>bottomPull()}
                onEndReachedThreshold={0.3}
                onRefresh={()=>pullToRefresh()}
                refreshing={bools.refreshing}

            />
            }

        </View>
    )
}

export default listView
