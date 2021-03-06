# Selección de historias de usuario



## Historias seleccionadas



| N°   | Como          | Quiero                                                       | Para                                                         |
| ---- | ------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 1    | Propietario   | Obtener el detalle mensual de mis gastos comunes             | Conocer el monto de mi deuda                                 |
| 2    | Propietario   | Obtener el detalle mensual del total de gastos comunes       | Justificar los montos que he de pagar                        |
| 7    | Propietario   | Conocer el costo asociado al arriendo de los espacios comunes | Evaluar si este se ajusta a mi presupuesto                   |
| 8    | Administrador | Ver la lista de propietarios morosos                         | Tomar acciones al respecto                                   |
| 9    | Administrador | Registrar gastos comunes                                     | Informar a los propietarios de sus gastos comunes            |
| 11   | Administrador | Actualizar datos de las propiedades                          | Registrar cambios de propietarios                            |
| 12   | Administrador | Registrar propiedades con sus atributos                      | Tener control sobre ellas                                    |
| 15   | Administrador | Configurar la forma en la que se reparten los gastos mensuales entre los propietarios | Adecuar ésta a los estándares del condominio/edificio        |
| 21   | Administrador | Eliminar una propiedad del registro                          | Casos de equivocación al registrar o de fuerza mayor         |
| 22   | Administrador | Modificar datos de los gastos comunes                        | Actualizar estos                                             |
| 23   | Administrador | Eliminar un gasto común                                      | Casos de equivocación al registrar un gasto o ya tenerlo saldado |
| 26   | Administrador | Registrar el pago de los propietarios                        | Saldar las cuentas que se pagaron de forma presencial        |



## Justificación de selección

### 1 - Propietario: Obtener el detalle mensual de mis gastos comunes

Al registrar los gastos comunes mensuales, el administrador distribuye estos en proporciones justas entre los propietarios, y se las notifica a cada uno de estos, por lo que es necesario que la plataforma presente los montos a los propietarios de tal manera que puedan conocer su deuda en particular para el posterior pago de esta.


### 2 - Propietario: Obtener el detalle mensual del total de gastos comunes
Para que exista una buena comunicación entre los propietarios y el administrador de lo que se esta gastando dentro del condominio o edificio, es necesario dar el detalle completa a los propietarios de tal manera que tenga el porque de estos gastos.

### 7 - Administrador: Conocer el costo asociado al arriendo de los espacios comunes
Los propietarios a la hora de poder seleccionar arrendar un espacio común, es necesario mostrar los gastos asociados al tiempo de uso y del espacio común seleccionado con lo cual el arrendatario sabrá cuanto le costara el arriendo que desea realizar.

### 8 - Administrador: Ver la lista de propietarios morosos
Los propietarios morosos son las persona que no han pagado arriendo o gastos comunes. Es necesario mantener un registro de aquellos propietarios, ya que al tener esta información el administrador podrá pensar en una posible acción a realizar con estas personas.

### 9 - Administrador: Registrar gastos comunes
Para organizar y controlar el flujo de los gastos comunes dentro de edificios o condominios, es esencial el registro de estos, de tal forma que se les pueda comunicar a los propietarios dentro del sector y dar un plazo para la paga de ellos.

### 11 - Administrador: Actualizar datos de las propiedades
Se selecciona como parte del CRUD del administrador para el registro y control de las propiedades, dando el supuesto de que un propietario pueda dejar su vivienda por diferentes motivos, el administrador podrá actualizar el estado de esta propiedad para su futuro control.

### 12 - Administrador: Registrar propiedades con sus atributos
La visión general del sistema es crear una estandarización en el control de edificios o condominios y como objetivo primordial el registro de propiedades, es por ello que es esencial tener en el sistema un registro de propiedades personalizado que se adecue a las necesidades y características del edificio o condominio en particular.

### 15 - Administrador: Configurar la forma en la que se reparten los gastos mensuales entre los propietarios
Los gastos o inversiones que se realizan mes a mes en un edificio o condominio se dividen proporcionalmente entre los departamentos, siendo la obligación de quienes viven en el edificio pagarlos de manera oportuna. Estos gastos comunes pueden clasificarse en dos tipos; Ordinarios, como los que llevan a cabo la administración con el objetivo de mantener el edificio en funcionamiento, y de forma Extraordinaria que no siempre se cobran y que corresponden al desembolso de dinero para nuevos proyectos o mejoras que quieran hacer en el inmueble. Además, calcular el gasto a través del prorrateo puede ser de acuerdo al gasto, al tamaño u otros factores. Dejando en claro que debe haber una funcionalidad de configuración que evalúe tanto el tipo de gasto común como el cálculo que varía de acuerdo con los estándares del edificio o condominio.

### 21 - Administrador: Eliminar una propiedad del registro
Se selecciona como parte del CRUD del administrador en la sección de propiedades, para asegurar que las propiedades ingresadas al sistema sean exactamente las que componen el condominio, edificio o comunidad.

### 22 - Administrador: Modificar datos de los gastos comunes
Se selecciona como parte del CRUD del administrador en la sección de gastos comunes, para dar la posibilidad al administrador de editar los datos de un gasto común para asegurar que la información disponible sobre este sea la correcta mediante la adición de información o edición de esta.

### 23 - Administrador: Eliminar un gasto común
Se selecciona como parte del CRUD del administrador en la sección de gastos comunes, dando la posibilidad al este de eliminar algún ingreso de gasto común, sea por equivocación o por tener esa cuenta ya saldada, de tal forma que esta no se presente en el pago mensual de los propietarios.

### 26 - Administrador: Registrar el pago de los propietarios
Dado a un supuesto de que un propietario no pueda pagar a través del sistema, se da la posibilidad al administrador de poder registrar pagos presenciales a estos propietarios.
