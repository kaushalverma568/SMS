<template>
  <div class="item-wrapper">
    <div class="item">
      <div class="flex">
        <div class="thumb">
          <img
            src="https://s3-alpha-sig.figma.com/img/e6a5/7dff/4c9ed6ec2f56b581d17fe6f897af8d30?Expires=1602460800&Signature=PPv~XlEo4d~30N~3mauVQcOmv14c4-0Iz0BlV-uy7QO9MohhrPAzreVFNS2wM3Gi~Z~53b2mV3ju4EFE13qA~e-qWtTl~6ZM1JZgu0alj4ctQS2hEAvyieuiO04LjFms~42~f2ZJaAew5phfezZY2qFzN8hYq65vTMKHf0pODakA8-N85B1XxaD7MoTYMr38pf2YGXS8Nk8wMMSvNCNmmkShE37qVnINXbO2d5vikdvIinmSKnoCb3To-0oAFdZ60zDcTdOD5IOhgChfryMhU9Z7ZNMLpWxH0PrzdP6jGm2G-0P1eg4TTacrgFL4SVt0zYMK~rpdH3F5UQ77Hj~sDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
          />
        </div>
        <div class="infos">
          <h1>Title item of lorem ipsum dolor sit amet should be here</h1>
          <div class="price">Rp 150.000</div>
          <div>
            <div class="actions">
              <div class="action">
                <img src="../assets/phone.svg" />
              </div>
              <div class="action">
                <img src="../assets/camera.svg" />
              </div>
              <div class="action">Request an admin</div>
              <div class="action">
                <img src="../assets/report.svg" />
              </div>
            </div>
          </div>
          <div class="seller">
            <div class="avatar" />
            <div class="name">
              <h2>Lara Madrigal</h2>
              <div class="seller-type">Lorem ipsum</div>
            </div>
          </div>
        </div>
      </div>
      <div class="details">
        <h2>Product details</h2>
        <p>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit.
        </p>
        <p>
          Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.item-wrapper {
  padding: 120px 0;
  display: flex;
  justify-content: center;

  .item {
    width: 810px;
    max-width: 100%;
    margin: auto;
    .flex {
      display: flex;
      align-items: center;
      margin-bottom: 40px;
    }

    .thumb {
      width: 308px;
      min-width: 308px;
      height: 307px;

      background: #f2f2f2;
      border-radius: 24px;
      padding: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      margin-right: 30px;

      img {
        width: 100%;
      }
    }

    .infos {
      h1 {
        margin: 0;
        font-size: 22px;
        margin-bottom: 20px;
      }
      .price {
        color: #6063eb;
        font-size: 18px;
        font-weight: bold;
        margin-bottom: 30px;
      }

      .actions {
        display: flex;
        border: 1px solid #f0f0f1;
        border-radius: 18px;
        padding: 14px 0;
        align-items: center;
        width: fit-content;
        margin-bottom: 30px;

        .action {
          padding: 0 20px;
          border-left: solid 1px #f0f0f1;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          height: 34px;
          display: flex;
          align-items: center;
          
          &:first-child {
            border-left: none;
          }
        }
      }

      .seller {
        display: flex;
        align-items: center;

        .avatar {
          width: 40px;
          height: 40px;
          background: #f0f0f1;
          border-radius: 50%;
          margin-right: 16px;
        }

        .name {
          h2 {
            font-size: 16px;
            margin: 0;
            margin-bottom: 10px;
          }
          .seller-type {
            font-size: 14px;
            font-weight: bold;
            color: rgba($color: #131416, $alpha: 0.4);
          }
        }
      }
    }
  }

  .details {
    h2 {
      font-size: 18px;
      margin: 0;
      margin-bottom: 20px;
    }
    p {
      font-size: 16px;
      margin: 0;
      line-height: 22px;
      margin-bottom: 20px;
    }
  }
}
</style>