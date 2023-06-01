<template>
    <div class="wrap">
        <HeaderComponent></HeaderComponent>
        <div>
            <SideComponent></SideComponent>
            <main>
                <div>
                  <router-view></router-view>
                </div>
            </main>
        </div>
    </div>
</template>

<script>
export default {
    name : 'DefaultLayer'
};
</script>

<style></style>
