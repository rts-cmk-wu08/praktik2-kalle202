const formatPrice = (amount: number) => {
    return new Intl.NumberFormat('da-DK', {
        style: 'currency',
        currency: 'DKK',
    }).format(amount);
}

export default formatPrice;