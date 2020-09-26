<template>
    <div class="request-wrapper">
        <div class="request">
            <div class="request-list">
                <RequestList />
            </div>
            <div class="request-details">
                <RequestDetails />
            </div>
        </div>
    </div>
</template>

<script>
import RequestList from '../components/RequestList'
import RequestDetails from '../components/RequestDetails'


export default {
    name: 'Request',
    components: {
        RequestDetails,
        RequestList
    }
}
</script>

<style lang="scss" scoped>
    .request-wrapper {
        display: flex;
        justify-content: center;
        min-height: 100vh;
        padding: 120px 0;

        .request {
            display: flex;
            min-height: calc(100vh - 240px);
        }
    }
</style>