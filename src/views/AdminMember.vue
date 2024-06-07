<template>
  <AdminBreadcrumb :items="breadcrumbItems" />
  <!-- 標題 -->
  <div class="memberblock">
    <h1 class="memberblock-h1">{{ mainTitle }}</h1>
    <span class="memberblock-pipe"> | </span>
    <h1 class="memberblock-h1">{{ subTitle }}</h1>
  </div>

  <!-- 搜尋 -->
  <div>
    <admin-input input-id="formGroupExampleInput1">
      <template #label>查詢條件</template>
      <template #select>
        <select class="form-select" aria-label="Default select example">
          <option selected>會員姓名</option>
          <option value="1">會員編號</option>
          <option value="2">會員手機</option>
        </select>
      </template>
    </admin-input>

    <!-- 日期 -->
    <div class="d-flex align-items-center">
      <admin-date-input start-date-id="dateInputField1" end-date-id="dateInputField2">
        <template #label>選擇日期</template>
      </admin-date-input>

      <admin-btn :handle-click="search">
        <template #icon>
          <img src="../imgs/icon/icon_admin-search-w.svg" alt="addIcon" height="20" width="20" />
        </template>
        <template #text>查詢</template>
      </admin-btn>
    </div>
  </div>

  <!-- 彈跳視窗 -->
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">會員查看</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="recipient-name" class="col-form-label">生日:</label>
              <input type="text" class="form-control" id="recipient-name" />
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">手機:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">Email:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">地址:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">建立時間:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>
            <div class="mb-3">
              <label for="message-text" class="col-form-label">最後登入:</label>
              <textarea class="form-control" id="message-text"></textarea>
            </div>

            <div class="mb-3">
              <label for="message-text" class="col-form-label">最後登入:</label>
              <div class="form-check form-switch">
                <input
                  :id="'flexSwitchCheckChecked' + admin.id"
                  class="form-check-input"
                  type="checkbox"
                  v-model="admin.status"
                />
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Send message</button>
        </div>
      </div>
    </div>
  </div>

  <section>
    <table class="table">
      <thead class="table-thead">
        <tr>
          <th scope="col">會員編號</th>
          <th scope="col">姓名</th>
          <th scope="col">E-mail</th>
          <th scope="col">手機</th>
          <th scope="col">地址</th>
          <th scope="col">最後登入時間</th>
          <th scope="col">停用/啟用</th>
          <th scope="col">查看</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">M001</th>
          <td>AAA</td>
          <td>AAA@gmail.com</td>
          <td>09123456789</td>
          <td>台北市中山區南京東路三段219號5樓</td>
          <td>2024/06/01/13:11</td>
          <td>
            <div class="form-check form-switch">
              <input id="flexSwitchCheckChecked" class="form-check-input" type="checkbox" checked />
            </div>
          </td>
          <td>
            <button @click="openModal('view', member)">
              <img src="../imgs/icon/icon_admin-eye.svg" alt="" width="20px" height="20px" />
            </button>
          </td>
        </tr>
        <!-- <tr v-for="(member, index) in members" :key="member.id">
          <th scope="row">{{ index + 1 }}</th>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.phone }}</td>
          <td>{{ member.address }}</td>
          <td>{{ member.finalLogin}}</td>
          <td>
            <div class="form-check form-switch">
              <input 
                :id="'flexSwitchCheckChecked' + view.id" 
                class="form-check-input" 
                type="checkbox" 
                v-model="member.active"
                @change="toggleStatus(member)"
              />
            </div>
          </td>
          <td>
            <button @click="openModal('view', member)" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <img src="../imgs/icon/icon_admin-eye.svg" alt="viewIcon" width="20px" height="20px" />
            </button>
          </td>
        </tr> -->
      </tbody>

      <caption>
        每頁列表顯示<span class="main__list-number">6</span
        >筆
      </caption>
    </table>
  </section>
</template>

<script>
import AdminBreadcrumb from '../components/AdminBreadcrumb.vue'
import AdminInput from '../components/AdminInput.vue'
import AdminDateInput from '../components/AdminDateInput.vue'
import AdminBtn from '../components/AdminBtn.vue'
import { variables } from '../js/AdminVariables.js'

export default {
  name: 'AdminMember',
  components: {
    AdminBreadcrumb,
    AdminInput,
    AdminDateInput,
    AdminBtn
  },
  data() {
    return {
      mainTitle: variables.memberblock.member,
      subTitle: variables.memberblock.memberList,
      breadcrumbItems: [
        { text: '首頁', link: '/admin', active: false },
        { text: variables.memberblock.member, link: '', active: true },
        { text: variables.memberblock.memberList, link: '/admin_member', active: false }
      ]

      // members: [
      //   { id: 1, name: 'Tibame', email: 'Tibame@gmail.com', phone: '09123456789', position: '主管', active: true },
      // ],
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
@import '../../node_modules/bootstrap/scss/bootstrap.scss'; // 確保這一行在最上面

.memberblock {
  margin-top: 40px;
  margin-left: 160px;
  color: $campari;
  &-h1 {
    display: inline;
    font-size: $fontSize_h3;
  }
  &-pipe {
    font-size: $fontSize_h3;
    margin: 0 20px;
  }
}

.table {
  width: 85%;
  margin-top: 100px;
  margin-left: 160px;
  .table-thead {
    font-size: $fontSize_h4;
    th {
      background-color: $campari;
      color: $ramos-gin-fizz;
    }
  }
  #flexSwitchCheckChecked:checked {
    background-color: $toggle-on;
    border: solid $toggle-on;
  }
  .fa-solid.fa-pencil {
    color: $campari;
  }
}
.swal-form {
  // z-index: 3;
  .swal2-input {
    pointer-events: auto; /* 確保輸入框可以被點擊和輸入 */
    opacity: 1; /* 確保輸入框是可見的 */
  }
}
</style>
