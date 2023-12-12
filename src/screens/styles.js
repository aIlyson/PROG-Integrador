import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        position: 'relative',
    },
    cardContainer: {
        marginBottom: 17,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#257157',
        textAlign: 'left',
    },
    cardText: {
        marginBottom: 10,
        color: '#444',
    },
    iconContainer: {
        alignItems: 'center',
        marginBottom: 10,
    },
    icon: {
        marginRight: 6,
    },
    logo: {
        width: 150,
        height: 100,
        alignSelf: 'center',
        marginBottom: 5,
      },
    showMoreText: {
        width: '70%',
        backgroundColor: '#257157',
        color: '#FFF',
        fontSize: 16,
        textAlign: 'center',
        marginTop: 7,
        padding: 12,
        borderRadius: 7,
        alignSelf: 'center',
        justifyContent: 'center',
    },
});
export default styles;
