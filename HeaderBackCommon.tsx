import { HStack, Text, Button, ButtonText, Icon, ChevronLeftIcon } from "@gluestack-ui/themed"
import {StyleSheet} from "react-native"



export const HeaderBackCommon=()=>{
    const styles = StyleSheet.create({
        container:{
            marginTop: 25,
            width: "100%",
            justifyContent:"space-between",
            alignItems: "center",
            borderBottom:"1px solid black",
        },
        btnBack: {
            backgroundColor: "transparent",
        },
        iconBack:{

        },
        tileBack:{
            color: "red",
        },
        btnDelete:{
            backgroundColor: "transparent",
            
        },
        txtDelete:{
            color: "red",
            fontWeight: "bold",
        }
    });

    return(
        <>
            <HStack style={styles.container}>
                <Button style={styles.btnBack} onPress={()=>{console.log("Quay lại");}}>
                    <Icon style={styles.iconBack} size="xl" as={ChevronLeftIcon}/>
                </Button>

                <Text>Giỏ hàng</Text>

                <Button style={styles.btnDelete} onPress={()=>{console.log("Xóa tất cả");}}>
                    <ButtonText style={styles.txtDelete}>Xóa tất cả</ButtonText>
                </Button>
            </HStack>
        </>
       
    )

}